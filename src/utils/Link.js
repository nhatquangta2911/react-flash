import String from "./String";

export const toCardLink = (title, id) => {
   return converter("cards/random", title, id);
};

export const getIdBySplitingPath = (url, prefix) => {
   return url.split(prefix)[1];
 }

const converter = (prefix, title, id) => {
   return '/' + prefix + '/' + id + '-' + String.convertToPath(title);
}
