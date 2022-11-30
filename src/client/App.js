import PageRender from "components/PageRender";
import { Link } from "react-router-dom";
import Page1 from "pages/Page1";
import Page2 from "pages/Page2";
import Page3 from "pages/Page3";

const App = () => {
  const navigation = [
    {
      label: "Página 1",
      path: "",
      element: <Page1 />,
    },
    {
      label: "Página 2",
      path: "page2",
      element: <Page2 />,
    },
    {
      label: "Página 3",
      path: "page3",
      element: <Page3 />,
    },
  ];

  return (
    <div style={{ height: "100vh" }}>
      <div>
        <Link to={"/"}>{navigation[0].label}</Link>
        <Link to={navigation[1].path}>{navigation[1].label}</Link>
        <Link to={navigation[2].path}>{navigation[2].label}</Link>
      </div>
      <PageRender options={navigation} />
    </div>
  );
};

export default App;
