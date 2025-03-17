import { useEffect } from "react";

function LumaButton({ eventId }) {
  useEffect(() => {
    const scriptId = "luma-checkout";
    const existingScript = document.getElementById(scriptId);

    if (existingScript) {
      existingScript.remove(); 
    }

    const script = document.createElement("script");
    script.id = scriptId;
    script.src = "https://embed.lu.ma/checkout-button.js";
    script.async = true;
    document.body.appendChild(script);
  }, [eventId]); 

  return (
    <a
      href={`https://lu.ma/event/${eventId}`}
      className="luma-checkout--button"
      data-luma-action="checkout"
      data-luma-event-id={eventId}
      onClick={(e) => e.preventDefault()} 
    >
      Register for Event
    </a>
  );
}

export default LumaButton;