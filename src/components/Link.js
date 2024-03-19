import classNames from "classnames";
import useNavigation from "../hooks/use-navigation";

function Link({ to, children, className, activeClassName }) {

  // const { navigate } = useContext(NavigationContext);
  const { navigate, currentPath } = useNavigation();

  const classes = classNames(
    'text-blue-500',
    className,
    currentPath === to && activeClassName
  );

  const handleClick = (event) => {
    event.preventDefault();

    //se quiser que abra numa aba nova, pode usar esse trecho
    // if (event.metaKey || event.ctrlKey) {
    //   return;
    // }
    // La no return usa essa tag <a href={to} onClick={handleClick}>{children}</a>

    navigate(to);
  };

  return (
    <a href={to} className={classes} onClick={handleClick}>{children}</a>
  );
}

export default Link;