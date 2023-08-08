import React from "react";
import { feedData } from "../../constants";
import BGIMG from "../../assets/images/feed_bg.jpg";
import { useParams } from "../../SSRouter/SSRouterHooks";

const ViewFeed = () => {
  const { id } = useParams();
  const feed = feedData[id];

  return (
    <div className="ss-view-feed container">
      <img src={BGIMG} alt="SuperRouter" />
      <h4>{feed}</h4>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
        lacinia eu risus in tristique. Mauris ipsum elit, venenatis id velit
        vel, vulputate rhoncus purus. Morbi tempor nisl blandit quam commodo,
        non pretium tortor elementum. In non libero velit. Suspendisse ornare
        ligula non bibendum congue. Maecenas iaculis vestibulum tincidunt.
        Integer iaculis turpis accumsan, placerat ante varius, blandit turpis.
        Maecenas non purus a nibh pellentesque imperdiet ut a nibh. Suspendisse
        consectetur diam elit, quis ultricies velit venenatis non. Curabitur
        tristique sem ultricies, fringilla augue vel, viverra lectus. Donec
        cursus nibh vel lorem condimentum eleifend. Aliquam ac mattis leo.
        Pellentesque facilisis felis ut enim ornare, et feugiat massa rhoncus.
        Sed sit amet bibendum lacus. Nulla tincidunt metus nibh, gravida
        placerat lacus congue sed. Etiam vel diam vel tellus lobortis tristique
        et et risus. Suspendisse potenti. Nunc fringilla ligula in lorem
        bibendum pharetra. Curabitur eget augue fermentum, aliquet tellus a,
        efficitur lectus. Pellentesque venenatis efficitur vulputate. Praesent
        ornare urna non pulvinar feugiat. In ut diam id lacus tristique rhoncus
        nec a urna. Ut sit amet enim nisi. In semper placerat felis ac viverra.
        Nulla vitae egestas lacus. Donec ac maximus magna. Vestibulum ante ipsum
        primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed
        orci erat, lacinia et ornare sit amet, rhoncus vel velit. Fusce ut
        malesuada justo. Integer sollicitudin ac justo ut fringilla. Duis
        ultrices nisl in odio hendrerit, ac aliquam leo lobortis. Suspendisse
        mollis porta mauris, id blandit erat condimentum sit amet. Proin blandit
        pellentesque luctus. Aenean libero lacus, auctor at purus non, dignissim
        tincidunt felis. Donec risus nulla, placerat in egestas vitae, finibus
        eu urna. Morbi odio tortor, ultricies vitae tristique malesuada, maximus
        quis arcu. Maecenas semper porta lectus sed mollis. Vivamus commodo a
        lacus ut ultricies. Fusce nibh est, finibus ut magna ut, varius
        ultricies erat. Duis rhoncus, augue eget condimentum auctor, dui elit
        pretium odio, at malesuada sem ligula sit amet augue. Duis eget dolor
        hendrerit ligula ultrices luctus id ac ante. Integer ac odio diam.
        Pellentesque id odio eget dui convallis mattis quis eu est. Aenean ac
        fringilla augue. In tempus consectetur magna sit amet commodo. Curabitur
        turpis lectus, fringilla eget elementum id, placerat sit amet eros.
        Pellentesque sagittis nisl tortor, eu pharetra quam eleifend a. Mauris
        sit amet mollis nisi, in facilisis arcu.
      </p>
    </div>
  );
};

export default ViewFeed;
