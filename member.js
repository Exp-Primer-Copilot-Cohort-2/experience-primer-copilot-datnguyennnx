function skillsMember(member) {
  let skills = member.skills;
  let skillsList = skills.map((skill) => {
    return `<li>${skill}</li>`;
  });
  return `<ul>${skillsList.join("")}</ul>`;
}
