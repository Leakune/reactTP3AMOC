import React from "react";

const Button = ({ className, href, children }) => {
  
  const onClick = (event) => {
    window.location.href = href;
    // if ctrl or meta key are held on click, allow default behavior of opening link in new tab
    if (event.metaKey || event.ctrlKey) {
        return;
      }
    // prevent full page reload
    event.preventDefault();
    // update url
    window.history.pushState({}, "", href);

    // communicate to Routes that URL has changed
    const navEvent = new PopStateEvent('popstate');
    window.dispatchEvent(navEvent);
  };

  return (
    <button className={className} type="button" class="btn btn-light" onClick={onClick}>{children}</button>
  );
};

export default Button;