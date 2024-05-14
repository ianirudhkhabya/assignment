import React from "react";

import Content from "@/components/Content";

const DashboardDynamic = ({ params }: { params: { id: string } }) => {
  return (
    <Content>
      <div className="flex-grow">
        <div className="flex items-center justify-center h-full">
          <div className="text-3xl font-bold text-center">
            Welcome to the dashboard {params.id} page!
          </div>
        </div>
      </div>
    </Content>
  );
};

export default DashboardDynamic;
