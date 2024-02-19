export const testCaseGroups = new Map([
  ["TC01", ["smoke", "ui"]],
  ["TC02", ["smoke", "api"]],
  ["TC03", ["regression", "ui"]],
  ["TC04", ["regression", "api"]],
  ["TC05", ["acceptance", "ui"]],
]);

export function getTestTitle(testItId: string, title: string) {
  const priorities = testCaseGroups
    .get(testItId)
    ?.map((group) => `@${group.toUpperCase()}`);

  const priority = priorities?.join(" ") || "";

  return `${testItId}: ${title}: ${priority}`;
}
