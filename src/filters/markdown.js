import MarkdownIt from 'markdown-it';

const markdownIt = new MarkdownIt({
  html: true,
  breaks: true,
  linkify: true,
});

export default function (value) {
  if (!value) {
    return '';
  }

  return markdownIt.render(value);
}