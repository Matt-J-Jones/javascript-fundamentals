const cohort = {
  name: 'March2023',
  id: 1234,
  names: ['Liam', 'Emma', 'Noah', 'Olivia', 'William']
};

const print_cohort_info = (cohort_object) => {
  console.log(`${cohort_object.id} - ${cohort_object.name} - ${cohort_object.names.length} students in this cohort`);
}

print_cohort_info(cohort);