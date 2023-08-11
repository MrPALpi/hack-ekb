import { defineStore } from "pinia";
import { ref, computed } from "vue";

export const useEventsStore = defineStore("EventStore", () => {
  const events = ref([
    { name: "Сходка", date: "1687392000000", type: "Туса" },
    { name: "подка", date: "1682392000000", type: "Рыба" },
    { name: "Жимолость", date: "1687392000000", type: "Обруч" },
    { name: "круть", date: "1684392000000", type: "Актава" },
    { name: "Арт", date: "1887392000000", type: "Ось" },
  ]);
  const types = ref([
    "Туса",
    "Рыба",
    "Обруч",
    "Актава",
    "Ось"
  ]);
  const name = ref("");
  const dateBegin = ref("");
  const dateEnd = ref("");
  const chekedTypes = ref([]);

  
  const SearchAndSort = computed(() => {
    const [compareDateBegin, compareDateEnd] = parseDate();
   console.log(compareDateBegin, compareDateEnd);
    return events.value.filter(
      (elm) =>
        elm.name.toLowerCase().includes(name.value.toLowerCase()) &&
        elm.date >= compareDateBegin &&
        elm.date <= compareDateEnd &&
        (chekedTypes.value.length ? chekedTypes.value.includes(elm.type) : true)
    );
  });

  const parseDate = () => {
    return [
      !dateBegin.value.length ? 0 : Date.parse(dateBegin.value),
      !dateEnd.value.length ? Infinity : Date.parse(dateEnd.value),
    ];
  };
  return { events, SearchAndSort, name, dateBegin, dateEnd, chekedTypes, types };
});
