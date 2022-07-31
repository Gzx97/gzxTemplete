export function setOpenId(open_id: string) {
  localStorage.setItem('open_id', open_id);
}

export const getOpenId: () => string = () => {
  const open_id = localStorage.getItem('open_id') || '';
  return open_id;
};

export const deleteOpenId = () => {
  localStorage.removeItem('open_id');
};
