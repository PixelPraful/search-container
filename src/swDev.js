export default function swDev() {
  function urlBase64ToUint8Array(base64String) {
    // eslint-disable-next-line no-mixed-operators
    const padding = '='.repeat((4 - base64String.length % 4) % 4);
    // eslint-disable-next-line no-useless-escape
    const base64 = (base64String + padding).replace(/\-/g, '+').replace(/_/g, '/');

    const rawData = window.atob(base64);
    const outputArray = new Uint8Array(rawData.length);

    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < rawData.length; ++i) {
      outputArray[i] = rawData.charCodeAt(i);
    }
    return outputArray;
  }

  function determineAppServerKey() {
    const vapidKey = 'BPLyetauEqTu8nwnHWH4GNOKKQx0n5cwdka6a04xBQEj9rC5ig0XMXtb9auTUC6CVLgkNuIh_oTVITjLSZUVxho';
    return urlBase64ToUint8Array(vapidKey);
  }

  const swUrl = `${process.env.PUBLIC_URL}/sw.js`;
  navigator.serviceWorker.register(swUrl).then((res) => {
    console.warn(res);
    return res.pushManager.subscribe({
      userVisibleOnly: true,
      applicationServerKey: determineAppServerKey(),
    }).then((subscription) => {
      console.log(subscription);
    }).catch((err) => {
      console.log('Error Subscribing: ', err);
    });
  });
}

