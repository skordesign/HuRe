// interface Event extends Base{
//     name: string;
//     title: string;
//     shortDescription: string;
//     content: string;
//     place: string;
//     startTime: Date;
//     endTime: Date;
// }
// export default Event
interface EventItem extends Base {
   
    name: string;
    title: string;
    shortDescription: string;
    content: string;
    place: string;
    startTime: Date;
    endTime: Date;
}