import Content from "@/components/Content";
import React from "react";

const PlayerDynamic = ({ params }: { params: { id: string } }) => {
  return (
    <Content>
      <div className="flex-grow">
        <div className="flex items-center justify-center h-full">
          <div className="text-3xl font-bold text-center">
            Welcome to the player {params.id} page!
          </div>
        </div>
      </div>
    </Content>
  );
};

export default PlayerDynamic;
