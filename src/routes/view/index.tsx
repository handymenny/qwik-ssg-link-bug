import {
  component$,
  useSignal,
  useVisibleTask$,
} from '@builder.io/qwik';
import { type DocumentHead, useLocation } from '@builder.io/qwik-city';

export default component$(() => {
  const location = useLocation();
  const id = useSignal<string | undefined>(undefined);

  // eslint-disable-next-line qwik/no-use-visible-task
  useVisibleTask$(
    () => {
      id.value =
        location.url.searchParams.get('id') ??
        new URLSearchParams(window.location.search).get('id') ??
        '';
    },
    { strategy: 'document-ready' },
  );

  return (
    <>
      {id.value && <h2>Id is: {id.value}</h2> || <h2>No id</h2>}
    </>
  );
});

export const head: DocumentHead = {
  title: 'View',
  meta: [
    {
      name: 'description',
      content: 'View',
    },
  ],
};
