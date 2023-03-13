
import PageHeader from "@/components/shared/PageHeader";
import Notification from "@/components/notificationPage/Notification";

import React from "react";

const Notifications = () => {
  return (
    <div>
        <PageHeader title="Mes Notifications" description="Rester au courant de toute nouvelle"/>
        <Notification type="Tentative de vol" description="Une tentative de vol a été enregistré au niveau du distributeur :115"/>
        <Notification type="Tentative de vol" description="Une tentative de vol a été enregistré au niveau du distributeur :115"/>
        <Notification type="Tentative de vol" description="Une tentative de vol a été enregistré au niveau du distributeur :115"/>

        <div className="flex justify-end">
              <button class="btn-green px-11 py-2.5 mt-4 light-grey">
                Marquer comme lu
              </button>
        </div>
    </div>
  );
};

export default Notifications;
