const initialState = {
    cards: [],
    activeCard: []
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_NEW_CARD':
        const newCards = [...state.cards, action.payload];
        localStorage.setItem('cards', JSON.stringify(newCards));
        return {
          ...state,
          cards: newCards
        };
        case 'REMOVE_CARD':
          const filteredCards = state.cards.filter((card) => card.id !== action.payload);
          localStorage.setItem('cards', JSON.stringify(filteredCards));

          const activeCardLS = localStorage.getItem('activeCard');
          if (activeCardLS && JSON.parse(activeCardLS).id === action.payload) {
            localStorage.removeItem('activeCard');
            return {
              ...state,
              cards: filteredCards,
              activeCard: []
            };
          }
        
          return {
            ...state,
            cards: filteredCards
          };
      case 'ACTIVE_CARD':
        localStorage.setItem('activeCard', JSON.stringify(action.payload));
        return {
          ...state,
          activeCard: [action.payload]
        };
      case 'REMOVE_ACTIVE_CARD':
        localStorage.removeItem('activeCard');
        return {
          ...state,
          activeCard: []
        };
      default:

        const cardsFromStorage = localStorage.getItem('cards');
        const activeCardFromStorage = localStorage.getItem('activeCard');
        return {
          ...state,

          cards: cardsFromStorage ? JSON.parse(cardsFromStorage) : state.cards,
          
          activeCard: activeCardFromStorage ? [JSON.parse(activeCardFromStorage)] : state.activeCard
        };
    }
  };
  
  export default reducer;