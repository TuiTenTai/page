const API_URL = "https://my-amn-list-server.herokuapp.com/";

export const getData = (setData, setLoading = (bool) => null) => {
  fetch(API_URL)
    .then((res) => res.json())
    .then((json) => {
      setData(json.reverse());
      setLoading(false);
    })
    .catch((err) => console.error(err));
};

export const addData = (data, newData, setData) => {
  fetch(API_URL, {
    method: "POST",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow",
    referrerPolicy: "no-referrer",
    body: JSON.stringify(newData),
  })
    .then((res) => res.json())
    .then((json) => setData([json, ...data]))
    .catch((err) => console.error(err));
};

export const updateData = (data, updateData, dataUpdate, setData) => {
  fetch(API_URL, {
    method: "PUT",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow",
    referrerPolicy: "no-referrer",
    body: JSON.stringify(updateData),
  })
    .then((res) => res.json())
    .then((json) => {
      const newData = [...data];
      newData[newData.indexOf(dataUpdate)] = json;
      setData(newData);
    })
    .catch((err) => console.error(err));
};

export const deleteData = (data, deleteData, setData) => {
  fetch(API_URL, {
    method: "DELETE",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow",
    referrerPolicy: "no-referrer",
    body: JSON.stringify({ _id: deleteData._id }),
  })
    .then(() => {
      const newData = [...data];
      newData.splice(newData.indexOf(deleteData), 1);
      setData(newData);
    })
    .catch((err) => console.error(err));
};
