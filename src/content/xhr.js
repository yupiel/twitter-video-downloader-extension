export default function (callback) {
  const xhrOpen = XMLHttpRequest.prototype.open;
  XMLHttpRequest.prototype.open = function (_, requestUrl) {
    if (/twitter\.com\/i\/api\/(2|graphql)\//i.test(requestUrl)) {
      const xhrSend = this.send;
      this.send = function () {
        const xhrStateChange = this.onreadystatechange;
        this.onreadystatechange = function () {
          const { readyState, responseText } = this;
          if (readyState === XMLHttpRequest.DONE && responseText) {
            callback(JSON.parse(responseText));
          }
          return xhrStateChange.apply(this, arguments);
        };
        return xhrSend.apply(this, arguments);
      };
    }
    return xhrOpen.apply(this, arguments);
  };
}
