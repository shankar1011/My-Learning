Hooks methods:-

1. useState:- for maintaining state

2. useEffect -- for lifecycle

3. useContext

4. useReducer

5. useCallback

6. useMemo

7. useRef

8. useImperativeHandle

9. useLayoutEffect

10. useDebugValue

Fragments:-- let us group a list of children without adding extra nodes to the DOM.

Example:-

return (
    <React.Fragment>
      <ChildA />
      <ChildB />
      <ChildC />
    </React.Fragment>
);

                            Class Component                     Functional Component

    Initialisation-->       state={activeIndex: 0}              useState(0)

    Reference-->            this.state.activeIndex              activeIndex

    Updates-->              this.setState({activeIndex: 10})    setActiveIndex(10)