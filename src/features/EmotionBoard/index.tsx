import React from "react";
import { observer } from "mobx-react-lite";
import { emotionStore } from "../../store/EmotionStore";
import { EmotionCard } from "../../components/EmotionCard";
import { DragDropContext, Droppable, Draggable, DropResult } from "@hello-pangea/dnd";

export const EmotionBoard: React.FC = observer(() => {
    const { emotions } = emotionStore;
  
    const onDragEnd = (result: DropResult) => {
      if (!result.destination) return;
      emotionStore.reorderEmotions(result.source.index, result.destination.index);
    };
  
    return (
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="emotions">
          {provided => (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
              className="flex flex-col gap-3 sm:grid sm:grid-cols-2 md:grid-cols-3 md:gap-4"
            >
              {emotions.map((emotion, idx) => (
                <Draggable key={emotion.id} draggableId={emotion.id} index={idx}>
                  {providedDraggable => (
                    <div
                      ref={providedDraggable.innerRef}
                      {...providedDraggable.draggableProps}
                      {...providedDraggable.dragHandleProps}
                    >
                      <EmotionCard
                        emotion={emotion}
                        onDelete={() => emotionStore.removeEmotion(emotion.id)}
                        onSwipeLeft={() => emotionStore.removeEmotion(emotion.id)}
                      />
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    );
  });
  