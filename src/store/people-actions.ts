import { peopleActions } from "./index";

export const getPeople = () => {
  return async (dispatch: any) => {
    try {
      const response = await fetch("http://localhost:5000/people");

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
