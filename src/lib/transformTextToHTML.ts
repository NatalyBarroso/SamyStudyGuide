export const transformTextToHTML = (text: string): string => {
  return text
    .replace(
      /<subheading>(.*?)<\/subheading>/g,
      `<p class="mb-0 w-full"><span class="border-b-[3px] border-[#7E99A3] pb-1 font-semibold">$1</span></p>`
    )
    .replace(/<bold>(.*?)<\/bold>/g, "<strong class='font-bold'>$1</strong>")
    .replace(/<italic>(.*?)<\/italic>/g, "<em class='italic'>$1</em>")
    .replace(/\n/g, "<br />")
    .replace(/<list>(.*?)<\/list>/g, "<ul class='list-disc list-inside mb-0'><li>$1</li></ul>");
};
