import dayjs from "dayjs";
import localizedFormat from "dayjs/plugin/localizedFormat";
import "dayjs/locale/pt-br";

dayjs.locale("pt-br");
dayjs.extend(localizedFormat);

export function transformDate(date: string) {
  const formattedDate = dayjs(date).format("DD MMM");
  const [day, month] = formattedDate.split(" ");
  const capitalizedMonth = month.charAt(0).toUpperCase() + month.slice(1);

  return `${day} ${capitalizedMonth}`;
}
