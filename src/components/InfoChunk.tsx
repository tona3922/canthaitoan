import React, { SetStateAction, useEffect, useState } from "react";
import { TNote } from "../app/pages/newproduct/page";
import { useDebouncedCallback } from "use-debounce";

const InfoChunk: React.FC<{
  item: TNote;
  setNote: (value: SetStateAction<TNote[]>) => void;
  index: number;
}> = ({ item, setNote, index }) => {
  const [name, setName] = useState(item.noteName);
  const [description, setDescription] = useState(item.noteDescription);
  useEffect(() => {
    setName(item.noteName);
    setDescription(item.noteDescription);
  }, [item]);
  // Debounced callback for noteName
  const debouncedSetName = useDebouncedCallback((value: string) => {
    setNote((prev) =>
      prev.map((noteItem, idx) =>
        idx === index
          ? { ...noteItem, noteName: value } // Update immutably
          : noteItem
      )
    );
  }, 1000);

  // Debounced callback for noteDescription
  const debouncedSetDescription = useDebouncedCallback((value: string) => {
    setNote((prev) =>
      prev.map((noteItem, idx) =>
        idx === index
          ? { ...noteItem, noteDescription: value } // Update immutably
          : noteItem
      )
    );
  }, 1000);

  // Handle input changes and debounce state updates
  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setName(value);
    debouncedSetName(value); // Update state with debounce
  };

  const handleDescriptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setDescription(value);
    debouncedSetDescription(value); // Update state with debounce
  };

  return (
    <div className="flex gap-3">
      <input
        className="border h-10 px-1 outline-none rounded"
        name="noteName"
        type="text"
        placeholder="thông số kỹ thuật"
        required
        value={name}
        onChange={handleNameChange}
      />
      <input
        className="border h-10 px-1 outline-none rounded"
        name="noteDescription"
        type="text"
        placeholder="giá trị"
        required
        value={description}
        onChange={handleDescriptionChange}
      />
      <button
        className="bg-red-500 p-2 rounded-lg text-white font-semibold"
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
