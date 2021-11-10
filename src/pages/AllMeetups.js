import MeetupList from "../components/meetups/MeetupList";

const DUMMY_DATA = [
  {
    id: "m1",
    title: "Tinder Meetup",
    image:
      "https://images.unsplash.com/photo-1603394956091-583833c68ea9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGRhdGV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    address: "Meetupstreet 5, 12345 Meetup City",
    description:
      "This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!",
  },
  {
    id: "m2",
    title: "Comedy club Meetup",
    image:
      "https://images.unsplash.com/photo-1573676047757-905630d8e3ab?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Y29tZWR5JTIwY2x1YnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    address: "GhanaJollofstreet 5, 12345 Meetup City",
    description:
      "This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!",
  },
  {
    id: "m3",
    title: "Business Meetup",
    image:
      "https://images.unsplash.com/photo-1611095790444-1dfa35e37b52?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGJ1c2luZXNzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    address: "Soteria 5, 12345 Meetup City",
    description:
      "This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!",
  },
  {
    id: "m4",
    title: "Alcohol Geng",
    image:
      "https://media.istockphoto.com/photos/young-men-and-women-enjoying-a-party-picture-id641775168?b=1&k=20&m=641775168&s=170667a&w=0&h=PUh0XLUyyVlm66jZbQCHHvuS1Cd4_t8y62HxKi_u5p4=",
    address: "Soteria 5, 12345 Meetup City",
    description:
      "This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!",
  },
  {
    id: "m5",
    title: "Foodies",
    image:
      "https://media.istockphoto.com/photos/friends-playing-volleyball-in-the-swimming-pool-picture-id1262681815?b=1&k=20&m=1262681815&s=170667a&w=0&h=CLUbFePBJghJHeTeWFVEsipIHHPteQV6iTOKh3XCbv4=",
    address: "Soteria 5, 12345 Meetup City",
    description:
      "This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!",
  },
];

function AllMeetupsPage() {
  return <section>
    <h1>All Meetups</h1>
    <MeetupList meetups={DUMMY_DATA} />
  </section>
}

export default AllMeetupsPage;
