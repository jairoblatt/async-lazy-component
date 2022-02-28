import { defineAsyncComponent, h, AsyncComponentOptions, VNode } from "vue";

export interface AsyncLazyComponentOptions extends AsyncComponentOptions {
  loadingComponentOptions?: object;
}

export function defineAsyncLazyComponent({
  loader,
  loadingComponent,
  loadingComponentOptions,
  ...asyncComponentOptions
}: AsyncLazyComponentOptions) {
  let resolveLoader: () => void;

  return defineAsyncComponent({
    ...asyncComponentOptions,

    loader: () => {
      return new Promise((resolve) => {
        resolveLoader = () => resolve(loader());
      });
    },

    loadingComponent: {
      mounted() {
        if (!(`IntersectionObserver` in window)) {
          resolveLoader();
          return;
        }

        const observer = new window.IntersectionObserver((entries) => {
          if (entries[0].intersectionRatio <= 0) return;
          observer.disconnect();
          resolveLoader();
        });

        observer.observe(this.$el);
      },

      render() {
        return h(loadingComponent as VNode, loadingComponentOptions);
      },
    },
  });
}
