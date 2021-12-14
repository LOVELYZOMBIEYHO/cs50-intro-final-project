export default function contains(context, node) {
  if (context.contains)
    return context.contains(node);
  if (context.compareDocumentPosition)
    return context === node || !!(context.compareDocumentPosition(node) & 16);
}
