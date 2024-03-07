import { decorateModals } from '../../scripts/scripts.js';

export default function decorate(block) {
  block.classList.add(...'ctasection mx-auto max-w-7xl pt-6 lg:py-8'.split(' '));
  block.querySelector(':scope div > div').classList.add(...'md:flex space-y-8 md:space-y-0 md:flex-row w-full py-8 md:py-16 md:px-12 px-6 items-center md:justify-between bg-danaherpurple-800'.split(' '));
  block.querySelector('h2')?.classList.add(...'text-2xl p-0 m-0 tracking-tight sm:text-3xl text-white font-normal tracking-wide max-w-sm lg:max-w-2xl'.split(' '));
  block.querySelectorAll('p > a').forEach((a) => {
    a.classList.add(...'btn-outline-trending-brand text-lg rounded-full px-6 py-3 !no-underline'.split(' '));
    if (a.href.includes('#request-quote')) {
      block.querySelector('p')?.classList.add(...'show-modal-btn'.split(' '));
      a.classList.remove(...'btn btn-outline-primary'.split(' '));
    }
  });
  decorateModals(block);
}
