import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { RotateCcw, Play } from "lucide-react";

interface GameCard {
  id: number;
  emoji: string;
  name: string;
  isFlipped: boolean;
  isMatched: boolean;
}

const wickedCards = [
  { emoji: "🧙‍♀️", name: "Elphaba" },
  { emoji: "✨", name: "Glinda" },
  { emoji: "🤴", name: "Fiyero" },
  { emoji: "👸", name: "Nessarose" },
  { emoji: "🦁", name: "Leão Covarde" },
  { emoji: "🎭", name: "Teatro" },
  { emoji: "💚", name: "Verde" },
  { emoji: "⭐", name: "Estrela" },
  { emoji: "🌪️", name: "Tornado" },
  { emoji: "🏰", name: "Castelo" },
  { emoji: "🧹", name: "Vassoura" },
  { emoji: "👠", name: "Sapatos" },
];

export default function WickedGame() {
  const [cards, setCards] = useState<GameCard[]>([]);
  const [flippedCards, setFlippedCards] = useState<number[]>([]);
  const [moves, setMoves] = useState(0);
  const [matches, setMatches] = useState(0);
  const [gameWon, setGameWon] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [canClick, setCanClick] = useState(true);
  const [timeLeft, setTimeLeft] = useState(120); // 2 minutos
  const [gameOver, setGameOver] = useState(false);

  const initializeGame = () => {
    const gameCards = [...wickedCards, ...wickedCards]
      .map((card, index) => ({
        ...card,
        id: index,
        isFlipped: false,
        isMatched: false,
      }))
      .sort(() => Math.random() - 0.5);

    setCards(gameCards);
    setFlippedCards([]);
    setMoves(0);
    setMatches(0);
    setGameWon(false);
    setGameOver(false);
    setIsPlaying(true);
    setCanClick(true);
    setTimeLeft(120); // 2 minutos
  };

  const handleCardClick = (cardId: number) => {
    if (!canClick || flippedCards.length >= 2) return;
    
    const card = cards.find(c => c.id === cardId);
    if (!card || card.isFlipped || card.isMatched) return;

    const newFlippedCards = [...flippedCards, cardId];
    setFlippedCards(newFlippedCards);

    setCards(prevCards =>
      prevCards.map(c =>
        c.id === cardId ? { ...c, isFlipped: true } : c
      )
    );

    if (newFlippedCards.length === 2) {
      setMoves(prev => prev + 1);
      setCanClick(false);
      
      const [firstId, secondId] = newFlippedCards;
      const firstCard = cards.find(c => c.id === firstId);
      const secondCard = cards.find(c => c.id === secondId);

      if (firstCard && secondCard && firstCard.name === secondCard.name) {
        // Match found!
        setTimeout(() => {
          setCards(prevCards =>
            prevCards.map(c =>
              c.id === firstId || c.id === secondId
                ? { ...c, isMatched: true, isFlipped: true }
                : c
            )
          );
          setMatches(prev => prev + 1);
          setFlippedCards([]);
          setCanClick(true);
        }, 500);
      } else {
        // No match, flip back
        setTimeout(() => {
          setCards(prevCards =>
            prevCards.map(c =>
              c.id === firstId || c.id === secondId
                ? { ...c, isFlipped: false }
                : c
            )
          );
          setFlippedCards([]);
          setCanClick(true);
        }, 1000);
      }
    }
  };

  // Cronômetro
  useEffect(() => {
    let timer: NodeJS.Timeout;
    
    if (isPlaying && timeLeft > 0 && !gameWon && !gameOver) {
      timer = setTimeout(() => {
        setTimeLeft(prev => {
          if (prev <= 1) {
            setGameOver(true);
            setIsPlaying(false);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }

    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [isPlaying, timeLeft, gameWon, gameOver]);

  useEffect(() => {
    if (matches === wickedCards.length) {
      setGameWon(true);
      setIsPlaying(false);
    }
  }, [matches]);

  const getCardStyle = (card: GameCard) => {
    if (card.isMatched) {
      return "bg-green-500 text-white border-green-600";
    }
    if (card.isFlipped) {
      return "bg-primary text-primary-foreground border-primary";
    }
    return "bg-muted hover:bg-muted/80 border-border";
  };

  return (
    <Card className="p-6 bg-card/50 backdrop-blur-sm border-primary/20">
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-primary mb-2">
          Wicked Memory! 🧠✨
        </h3>
        <p className="text-muted-foreground text-sm">
          Encontre os pares das personagens e elementos de Wicked!
        </p>
      </div>

      <div className="flex justify-between items-center mb-6">
        <div className="text-lg font-semibold">
          Movimentos: <span className="text-primary">{moves}</span>
        </div>
        <div className="text-lg font-semibold">
          Pares: <span className="text-secondary">{matches}/{wickedCards.length}</span>
        </div>
        <div className={`text-lg font-semibold ${timeLeft <= 30 ? 'text-red-500' : timeLeft <= 60 ? 'text-yellow-500' : 'text-green-500'}`}>
          ⏰ {Math.floor(timeLeft / 60)}:{(timeLeft % 60).toString().padStart(2, '0')}
        </div>
      </div>

      {!isPlaying && !gameWon && !gameOver && (
        <div className="text-center py-8">
          <div className="text-4xl mb-4">🎭</div>
          <h4 className="text-xl font-bold mb-4">Pronto para jogar?</h4>
          <p className="text-muted-foreground mb-6">
            Encontre todos os pares em 2 minutos! ⏰
          </p>
          <Button onClick={initializeGame} className="bg-primary hover:bg-primary/90">
            <Play className="w-4 h-4 mr-2" />
            Começar Jogo
          </Button>
        </div>
      )}

      {gameOver && (
        <div className="text-center py-8">
          <div className="text-6xl mb-4">⏰</div>
          <h4 className="text-2xl font-bold mb-2 text-red-500">Tempo Esgotado!</h4>
          <p className="text-lg mb-4">Você encontrou {matches} de {wickedCards.length} pares!</p>
          <p className="text-muted-foreground mb-6">
            Movimentos: <span className="font-bold text-primary">{moves}</span>
          </p>
          <Button onClick={initializeGame} className="bg-primary hover:bg-primary/90">
            <RotateCcw className="w-4 h-4 mr-2" />
            Tentar Novamente
          </Button>
        </div>
      )}

      {gameWon && (
        <div className="text-center py-8">
          <div className="text-6xl mb-4">🎉</div>
          <h4 className="text-2xl font-bold mb-2 text-primary">Parabéns!</h4>
          <p className="text-lg mb-4">Você encontrou todos os pares!</p>
          <p className="text-muted-foreground mb-2">
            Movimentos: <span className="font-bold text-primary">{moves}</span>
          </p>
          <p className="text-muted-foreground mb-6">
            Tempo restante: <span className="font-bold text-green-500">{Math.floor(timeLeft / 60)}:{(timeLeft % 60).toString().padStart(2, '0')}</span>
          </p>
          <Button onClick={initializeGame} className="bg-primary hover:bg-primary/90">
            <RotateCcw className="w-4 h-4 mr-2" />
            Jogar Novamente
          </Button>
        </div>
      )}

      {isPlaying && (
        <div className="grid grid-cols-4 gap-3 mb-6">
          {cards.map((card) => (
            <div
              key={card.id}
              onClick={() => handleCardClick(card.id)}
              className={`
                aspect-square rounded-lg border-2 cursor-pointer transition-all duration-300
                flex items-center justify-center text-2xl font-bold
                hover:scale-105 active:scale-95
                ${getCardStyle(card)}
              `}
            >
              {card.isFlipped || card.isMatched ? (
                <div className="text-center">
                  <div className="text-2xl mb-1">{card.emoji}</div>
                  <div className="text-xs">{card.name}</div>
                </div>
              ) : (
                <div className="text-2xl">❓</div>
              )}
            </div>
          ))}
        </div>
      )}

      {isPlaying && (
        <div className="flex gap-2 justify-center">
          <Button onClick={initializeGame} variant="outline" size="sm">
            <RotateCcw className="w-4 h-4 mr-2" />
            Reiniciar
          </Button>
        </div>
      )}

      <div className="mt-4 text-center text-xs text-muted-foreground">
        💚 Teste sua memória com os elementos mágicos de Wicked! ⏰ 2 minutos para vencer!
      </div>
    </Card>
  );
}
