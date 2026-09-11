import HomePage from "~/pages/home";

export function meta() {
  return [
    { title: "Rwanda's Digital Renaissance | Policy & Genesis (1994–2010)" },
    {
      name: "description",
      content:
        "Policy foundations, historical genesis, and strategic frameworks of Rwanda's digital evolution.",
    },
  ];
}

export default function IndexRoute() {
  return <HomePage />;
}
