import { useEffect, useState } from "react";

const MousePosition = ({ render }) => {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const handleMousePositionChange = (e) => {
      // Use e.clientX and e.clientY to access the mouse position on the screen
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", handleMousePositionChange);

    return () => {
      window.removeEventListener("mousemove", handleMousePositionChange);
    };
  }, []);

  return render(mousePosition);
};

const PanelMouseLogger = () => {
  
  return (
    <MousePosition 
      render={({ mousePosition }) => {
        return(
            <div className="BasicTracker">
              <p>Mouse position:</p>
              <div className="Row">
                <span>x: {mousePosition.x}</span>
                <span>y: {mousePosition.y}</span>
              </div>
            </div>)
      }}
      />
  );
};

const PointMouseLogger = () => {
  
  return (
    <MousePosition render={(mousePosition) =>
      {return( <p>
        ({mousePosition.x}, {mousePosition.y})
      </p>)
    }
    }
      />
  )
};


function MouseMain()
{
    return (
        <div>
          <header className="">Restaurant</header>
          <PanelMouseLogger />
          <PointMouseLogger />
        </div>
      );

}

export default MouseMain;