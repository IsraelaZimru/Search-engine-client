import { peopleActions } from "./index";

const URL = "http://localhost:5000/people";

// my own action function for async code:
//must be without sync
// we have to return a function !! we can make it async!!
export const getPeople = () => {
  return async (dispatch: any) => {
    try {
      const response = await fetch(URL);

      if (!response.ok) throw new Error("Feching people data failed.");

      const responseData = await response.json();

      if (responseData.length) {
        dispatch(peopleActions.getPeopleFromDB(responseData));
      }
    } catch (err) {
      console.log(err);
    }
  };
};

export const getNameInfo = (value: string) => {
  console.log("name action", value);

  return async (dispatch: any) => {
    try {
      const response = await fetch(URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: value }),
      });

      if (!response.ok) throw new Error("Sending name data failed.");

      const responseData = await response.json();
      console.log("responseData", responseData);

      dispatch(peopleActions.newPerson(responseData));
    } catch (err) {
      console.log(err);
    }
  };
};

export const deleteOne = (value: string) => {
  console.log("id action", value);

  return async (dispatch: any) => {
    try {
      const response = await fetch(URL, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: value }),
      });

      if (!response.ok) throw new Error("delete name failed.");
      dispatch(peopleActions.deleteOne(value));
    } catch (err) {
      console.log(err);
    }
  };
};
