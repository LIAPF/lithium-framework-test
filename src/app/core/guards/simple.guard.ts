export const simpleGuard = async (self: any) => {
    await self._routes.goto('');
    return true;
}
  