import String from "./String";

export const toCardLink = (id) => {
   return converter("cards/card", id);
};

export const getIdBySplitingPath = (url, prefix) => {
   return url.split(prefix)[1];
 }

const converter = (prefix, id) => {
   return '/' + prefix + '/' + id;
}
