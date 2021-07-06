import NewMeetupForm from "../../components/meetups/NewMeetupForm";

const NewMeetupPage = () => {
  const addNewMeetup = (newData) => {
      console.log(newData);
  };

  return <NewMeetupForm onAddMeetup={addNewMeetup} />;
};

export default NewMeetupPage;
