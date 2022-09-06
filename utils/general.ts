export function formatDate(date: Date): string {
  let dd = String(date.getDate());
  let mm = String(date.getMonth() + 1);

  const yyyy = date.getFullYear();
  if (Number(dd) < 10) {
    dd = `0${dd}`;
  }
  if (Number(mm) < 10) {
    mm = `0${mm}`;
  }

  const formattedDate = `${yyyy}-${mm}-${dd}`;
  return formattedDate;
}

export function formatTime(date: Date): string {
  let hh = String(date.getHours());
  let mm = String(date.getMinutes());

  if (Number(hh) < 10) {
    hh = `0${hh}`;
  }
  if (Number(mm) < 10) {
    mm = `0${mm}`;
  }

  const formattedDate = `${hh}:${mm}`;
  return formattedDate;
}

export function generateRandomString(length: number): string {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  return Array.from({ length }, (_, i) => i).reduce(
    prev => prev + characters.charAt(Math.floor(Math.random() * characters.length)),
    '',
  );
}

export function capitalize(input: string): string {
  return input.charAt(0).toUpperCase() + input.slice(1);
}
