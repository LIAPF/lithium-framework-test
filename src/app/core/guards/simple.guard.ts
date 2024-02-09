export const simpleGuard = (self: any) => async () => {
    await self._routes.goto('');
    return false;
}
  