**Author:** [@okayitssundar](https://sundar.zingbizz.com)

# Solid.js Documentation

## Introduction to Solid.js:

Solid.js is a declarative JavaScript library designed to simplify the process of building user interfaces. Its core philosophy revolves around reactivity and performance, making it an excellent choice for modern web development.

### Reactivity:

Solid.js embraces a reactive programming model, where changes to data automatically trigger updates to the user interface. This means that developers don't need to manually manipulate the DOM or manage state changes, as Solid.js takes care of these tasks efficiently. Reactivity in Solid.js is achieved through fine-grained dependency tracking, ensuring that only the necessary components are re-rendered when data changes. This leads to more predictable and maintainable code, as developers can focus on writing logic rather than worrying about how changes propagate through the UI.

### Performance:

Solid.js is built from the ground up with performance in mind. By leveraging fine-grained reactivity and efficient rendering strategies, Solid.js minimizes unnecessary DOM operations and maximizes rendering speed. This results in smoother user experiences and better overall performance, especially in applications with complex user interfaces or large datasets.

### Simplicity and Minimalism:

One of the key advantages of Solid.js is its simplicity and minimalism. The API surface is intentionally kept small and focused, making it easy for developers to learn and use. Solid.js provides all the essential tools for building modern web applications, without the bloat or complexity found in other frameworks. This simplicity not only improves developer productivity but also leads to cleaner, more maintainable codebases.

### Why Solid.js Over React:

While React is undoubtedly a popular choice for building web interfaces, Solid.js offers several compelling advantages:

1. **Reactivity Model**: Solid.js' reactive programming model provides a more intuitive way to manage state and data flow compared to React's imperative approach with hooks.

2. **Performance**: Solid.js' fine-grained reactivity and efficient rendering make it more performant, especially in applications with complex UIs or frequent data updates.

3. **Simplicity**: Solid.js' minimalist API surface and clear design make it easier to learn and use, reducing the learning curve for developers.

Overall, Solid.js offers a fresh approach to building web interfaces, combining the best aspects of reactivity, performance, and simplicity to empower developers to create fast, responsive, and maintainable applications.

## Setting Up the Environment:

1. Install Node.js and npm if not already installed.
2. Create a new project directory.
3. Initialize a new npm project with `npm init -y`. (optional)

## Building a Basic Todo Application:

### Setup the Project Structure:

- For JavaScript

```sh
> npx degit solidjs/templates/js my-app
> cd my-app
> npm i # or yarn or pnpm
> npm run dev # or yarn or pnpm

```

- For Typescript

```sh
    > npx degit solidjs/templates/ts my-app
    > cd my-app
    > npm i # or yarn or pnpm
    > npm run dev # or yarn or pnpm
```

2. **Create the Todo Component** (`TodoList.js`):

   - Import `createSignal` and `For` from Solid.
   - Create a basic functional component `TodoList`.
   - Use `createSignal` to manage state for the todo items.
   - Render a list of todo items using `For` loop.

3. **Implement Todo List Rendering** (`App.js`):

   - Import and render `TodoList` component.
   - Initialize some dummy todo items to display.

4. **Add Functionality to Add Todo Items**:

   - Implement a function to add new todo items to the list.
   - Use an input field and a button to add new todos.
   - Update state using `createSignal` accordingly.

5. **Implement Functionality to Mark Todos as Complete**:

   - Add a checkbox next to each todo item.
   - Implement a function to toggle the completion status of todos.
   - Update state accordingly.

6. **Implement Functionality to Delete Todos**:
   - Add a delete button next to each todo item.
   - Implement a function to remove todos from the list.
   - Update state accordingly.

**Testing and Debugging**:

- Test the application by adding, completing, and deleting todo items.
- Use browser developer tools for debugging if needed.

**Conclusion**:

- Recap the main concepts learned during the session: declarative rendering, reactivity, and component-based architecture.
- Encourage further exploration and experimentation with Solid.js.
- Provide resources for further learning, such as official documentation and community forums.
