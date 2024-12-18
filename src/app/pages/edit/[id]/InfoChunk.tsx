import React, { SetStateAction } from "react";
import { TNote } from "../../newproduct/page";

const InfoChunk: React.FC<{
  item: TNote;
  setNote: (value: SetStateAction<TNote[]>) => void;
  index: number;
}> = ({ item, setNote, index }) => {
  return (
    <div className="flex">
      <input
        className="border h-10 px-1 outline-none"
        name="noteName"
        type="text"
        placeholder="name"
        required
        onChange={(e) => {
          setNote((prev) =>
            prev.map((noteItem, idx) =>
              idx === index
                ? { ...noteItem, noteName: e.target.value } // Update immutably
                : noteItem
            )
          );
        }}
        value={item.noteName} // Use `value` instead of `defaultValue`
      />
      <input
        className="border h-10 px-1 outline-none"
        name="noteDescription"
        type="text"
        placeholder="description"
        required
        onChange={(e) => {
          setNote((prev) =>
            prev.map((noteItem, idx) =>
              idx === index
                ? { ...noteItem, noteDescription: e.target.value } // Update immutably
                : noteItem
            )
          );
        }}
        value={item.noteDescription} // Use `value` instead of `defaultValue`
      />
      <button
        type="button"
        onClick={() => {
          setNote((prev) => prev.filter((_, idx) => idx !== index));
        }}
      >
        Delete
      </button>
    </div>
  );
};

export default InfoChunk;
