import { ImageLoaderProps } from "next/image";
// import { IBookableSlots, Location } from "./QueueInterface";
// import ical, { ICalAlarmData, ICalAlarmType } from "ical-generator";
// import FileSaver from "file-saver";
import queueStoreStrings from "./StringConstants";
export function distanceCheck(
  lat1: any,
  lon1: any,
  lat2: any,
  lon2: any,
  check_value: any
): boolean {
  const R = 6371; // km (change this constant to get miles)
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLon = ((lon2 - lon1) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const d = R * c;
  if (d > 1) return Math.round(d) <= check_value;
  if (d <= 1) return true;
  return false;
}

export function distance(lat1: any, lon1: any, lat2: any, lon2: any): any {
  const R = 6371; // km (change this constant to get miles)
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLon = ((lon2 - lon1) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const d = R * c;
  return Math.round(d);
}

export function ordinal_suffix_of(i: number): string {
  const j = i % 10;
  const k = i % 100;
  if (j === 1 && k !== 11) {
    return `${i}st`;
  }
  if (j === 2 && k !== 12) {
    return `${i}nd`;
  }
  if (j === 3 && k !== 13) {
    return `${i}rd`;
  }
  return `${i}th`;
}

export function getAttributeStrippedId(attribute: string) {
  if (attribute.indexOf(":") > -1) {
    return `${attribute.split(":")[1]}`;
  }
  return attribute;
}

export function setProductId(product: string) {
  if (product.indexOf(":") > -1) {
    return product;
  }
  return `Product:${product}`;
}

export function myStaticLoader(image: ImageLoaderProps): string {
  return `${image.src}?w=${image.width}&q=${image.quality || 75}`;
}

export function getCalendar(
  qname: string,
  joining: any,
  endEvent: Date,
  startTime: number,
  startMin: number,
  endTime: number,
  endMin: number,
  queueSimplifiedOnBoarding: boolean
) {
//   const cal = ical({
//     prodId: {
//       company: `${queueStoreStrings.footerCompayName}`,
//       product: queueStoreStrings.companyProduct,
//       language: queueStoreStrings.language,
//     },
//     name: `${qname}`,
//     timezone: queueStoreStrings.timeZone,
//     scale: queueStoreStrings.scale,
//   });

//   const organizer = "Dr. Mueller";
//   const organizerEmail = "drmueller@example.com";

//   const startDate = new Date(joining);
//   startDate.setHours(startTime, startMin, 0, 0);
//   const endDate = new Date(joining).setHours(endTime, endMin, 0, 0);

//   const event = cal.createEvent({
//     start: new Date(startDate),
//     end: new Date(endDate),
//     summary: `${queueStoreStrings.summary}${qname}`,
//     description: `${queueStoreStrings.description}${qname}`,
//     location: `${qname}`,
//   });
//   const data: ICalAlarmData = { type: ICalAlarmType.display, trigger: 300 };
//   event.createAlarm(data);
//   const blob = cal.toBlob();
//   if (!queueSimplifiedOnBoarding) {
//     // FileSaver.saveAs(blob, `${qname} slot time.ics`);
//   }
}

export function downloadTokenHandler(token: string, title: string) {
  // const url = `https://mw.queueone.co.in/qone/v1.0/queue/token/${token}/`;

  // axios
  //   .get(url, { responseType: "blob" })
  //   .then((response) => {
  //     FileSaver(response.data, `${title} token.png`);
  //   })
  //   .catch((err) => {});
}

