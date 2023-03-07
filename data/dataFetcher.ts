import Shoes from "./shoes";

export default function DataFetcher(request: any) {
  return Filter(request, Shoes());
}

function Filter(request: any, data: any) {
    if (request.final) {
        if (request.value) {
            return data.filter((item: any) => {
                return item[request.type] == request.value;
           })
        } else {
            return data[request.type];
       }
    } else {
        return Filter(request.value, data[request.type]);
    }
}