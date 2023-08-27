const interHoverElements = document.querySelectorAll('.interHover');

interHoverElements.forEach((element) => {
  const icon = element.previousElementSibling; // Annahme: Icon befindet sich vor dem "interHover"-Span

  icon.addEventListener('mouseenter', () => {
    element.classList.add('active');
  });

  icon.addEventListener('mouseleave', () => {
    element.classList.remove('active');
  });
});
