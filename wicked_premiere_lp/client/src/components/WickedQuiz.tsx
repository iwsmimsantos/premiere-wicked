import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Share2, RotateCcw } from "lucide-react";

interface Question {
  id: number;
  question: string;
  options: {
    text: string;
    character: "elphaba" | "glinda" | "fiyero" | "nessarose";
  }[];
}

interface Result {
  character: string;
  title: string;
  description: string;
  color: string;
}

const questions: Question[] = [
  {
    id: 1,
    question: "Você descobre que um amigo próximo está sendo injustiçado. O que você faz?",
    options: [
      { text: "Enfrento a situação sozinha, mesmo que isso me custe", character: "elphaba" },
      { text: "Tento mediar e encontrar uma solução que agrade a todos", character: "glinda" },
      { text: "Questiono as regras que causaram a injustiça", character: "fiyero" },
      { text: "Fico ao lado do meu amigo, esperando que ele resolva", character: "nessarose" },
    ],
  },
  {
    id: 2,
    question: "Como você lida com críticas sobre algo que você não pode mudar em si mesma?",
    options: [
      { text: "Transformo isso em minha maior força", character: "elphaba" },
      { text: "Tento mostrar meus outros talentos para compensar", character: "glinda" },
      { text: "Ignoro e vivo do meu jeito", character: "fiyero" },
      { text: "Me machuco profundamente e guardo isso comigo", character: "nessarose" },
    ],
  },
  {
    id: 3,
    question: "Alguém que você admira te pede para fazer algo que vai contra seus valores. Você:",
    options: [
      { text: "Recuso, mesmo que isso signifique perder essa pessoa", character: "elphaba" },
      { text: "Tento convencê-la de que há outra forma", character: "glinda" },
      { text: "Questiono por que isso é importante para ela", character: "fiyero" },
      { text: "Faço, porque não quero decepcioná-la", character: "nessarose" },
    ],
  },
  {
    id: 4,
    question: "Você tem a chance de ser aceita por todos, mas precisa esconder quem você realmente é. Você:",
    options: [
      { text: "Prefiro ser odiada por ser eu mesma do que amada por ser falsa", character: "elphaba" },
      { text: "Tento equilibrar: mostro partes de mim que as pessoas aceitam", character: "glinda" },
      { text: "Não me importo com aceitação, vivo minha vida", character: "fiyero" },
      { text: "Escondo quem sou, porque a solidão é pior", character: "nessarose" },
    ],
  },
  {
    id: 5,
    question: "Você descobre uma verdade que pode mudar tudo, mas ninguém vai acreditar em você. O que faz?",
    options: [
      { text: "Luto pela verdade, mesmo sozinha contra todos", character: "elphaba" },
      { text: "Procuro aliados e tento convencê-los aos poucos", character: "glinda" },
      { text: "Vivo de acordo com essa verdade, mesmo que ninguém entenda", character: "fiyero" },
      { text: "Guardo para mim, porque não quero ser rejeitada", character: "nessarose" },
    ],
  },
  {
    id: 6,
    question: "O que te assusta mais?",
    options: [
      { text: "Ser lembrada como vilã quando tentei fazer o certo", character: "elphaba" },
      { text: "Descobrir que sou superficial e vazia por dentro", character: "glinda" },
      { text: "Viver uma vida sem sentido, apenas seguindo regras", character: "fiyero" },
      { text: "Nunca ser amada da forma que eu amo", character: "nessarose" },
    ],
  },
  {
    id: 7,
    question: "Alguém que você ama escolhe outra pessoa. Como você reage?",
    options: [
      { text: "Sofro em silêncio, mas desejo a felicidade dela", character: "elphaba" },
      { text: "Tento entender o que eu poderia ter feito diferente", character: "glinda" },
      { text: "Aceito e sigo em frente, o amor não se força", character: "fiyero" },
      { text: "Fico ressentida e me fecho emocionalmente", character: "nessarose" },
    ],
  },
  {
    id: 8,
    question: "Você tem poder para mudar o sistema, mas isso te transformará em inimiga pública. Você:",
    options: [
      { text: "Faço o que é certo, não importa o preço", character: "elphaba" },
      { text: "Tento mudar o sistema de dentro, sem me expor tanto", character: "glinda" },
      { text: "Questiono se o sistema realmente precisa ser mudado", character: "fiyero" },
      { text: "Não faço nada, porque não quero ficar sozinha", character: "nessarose" },
    ],
  },
  {
    id: 9,
    question: "O que define quem você é?",
    options: [
      { text: "Minhas escolhas, mesmo quando o mundo me julga errado", character: "elphaba" },
      { text: "Minha capacidade de crescer e me transformar", character: "glinda" },
      { text: "Minha busca por autenticidade e liberdade", character: "fiyero" },
      { text: "Minha dedicação a quem eu amo", character: "nessarose" },
    ],
  },
  {
    id: 10,
    question: "Se você pudesse deixar um legado, seria:",
    options: [
      { text: "Ter lutado pelos que não têm voz, mesmo incompreendida", character: "elphaba" },
      { text: "Ter aprendido a ser uma pessoa melhor através do amor", character: "glinda" },
      { text: "Ter vivido com propósito e autenticidade", character: "fiyero" },
      { text: "Ter amado intensamente, mesmo que não correspondida", character: "nessarose" },
    ],
  },
];

const results: Record<string, Result> = {
  elphaba: {
    character: "Elphaba",
    title: "Você é a Elphaba! 💚",
    description: "Você é forte, determinada e não tem medo de ser diferente. Sua coragem para lutar pelo que acredita, mesmo quando o mundo inteiro está contra você, é inspiradora. Você desafia a gravidade e voa além das expectativas. Como Elphaba, você entende que ser incompreendida é o preço da autenticidade.",
    color: "primary",
  },
  glinda: {
    character: "Glinda",
    title: "Você é a Glinda! 💖",
    description: "Você é carismática, popular e tem um coração generoso. Sua jornada de crescimento e sua capacidade de aprender com os outros mostram que a verdadeira beleza está na transformação. Você é a bruxa boa que todos amam, e sua maior força é reconhecer suas falhas e evoluir.",
    color: "secondary",
  },
  fiyero: {
    character: "Fiyero",
    title: "Você é o Fiyero! ✨",
    description: "Você é livre, aventureiro e não se prende a convenções. Sua busca por autenticidade e significado na vida te torna único. Você é o príncipe que escolhe o coração em vez da coroa, e sua jornada é sobre descobrir que há mais na vida do que aparências.",
    color: "accent",
  },
  nessarose: {
    character: "Nessarose",
    title: "Você é a Nessarose! 🌹",
    description: "Você é sensível, dedicada e busca amor e reconhecimento. Sua vulnerabilidade é sua força, e sua jornada mostra a importância de se amar primeiro. Você é a irmã que merece ser vista, e sua capacidade de amar intensamente é um dom raro.",
    color: "destructive",
  },
};

export default function WickedQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [showResult, setShowResult] = useState(false);
  const [result, setResult] = useState<Result | null>(null);

  const handleAnswer = (character: string) => {
    const newAnswers = [...answers, character];
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Calculate result
      const counts = newAnswers.reduce((acc, char) => {
        acc[char] = (acc[char] || 0) + 1;
        return acc;
      }, {} as Record<string, number>);

      const winner = Object.keys(counts).reduce((a, b) =>
        counts[a] > counts[b] ? a : b
      );

      setResult(results[winner]);
      setShowResult(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setShowResult(false);
    setResult(null);
  };

  const shareResult = () => {
    if (result) {
      const text = `🧙‍♀️ Descobri que sou ${result.character} no quiz de Wicked!\n\nDescubra quem você seria em Wicked e conheça a história de uma fã de desafiar a gravidade! ✨\n\n#EuNaPremiereDeWicked @wickedmusicalbr @universalpicsbr`;
      const url = typeof window !== 'undefined' ? window.location.href : 'https://premiere-wicked-g8t5-git-main-iasmims-projects-6fec51c7.vercel.app';
      const fullMessage = `${text}\n\n${url}`;
      
      if (navigator.share) {
        navigator.share({ 
          title: `Sou ${result.character} no Wicked! 🧙‍♀️`, 
          text: fullMessage
        });
      } else {
        navigator.clipboard.writeText(fullMessage);
        alert("✅ Mensagem copiada! Cole nas suas redes sociais para compartilhar 💚");
      }
    }
  };

  if (showResult && result) {
    return (
      <Card className="p-4 sm:p-6 md:p-8 lg:p-12 text-center bg-card/50 backdrop-blur-sm border-primary/20">
        <div className="space-y-4 sm:space-y-6">
          <div className="text-4xl sm:text-5xl md:text-6xl mb-4">
            {result.character === "Elphaba" && "🧙‍♀️"}
            {result.character === "Glinda" && "✨"}
            {result.character === "Fiyero" && "🤴"}
            {result.character === "Nessarose" && "👸"}
          </div>
          
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary leading-tight">
            {result.title}
          </h3>
          
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            {result.description}
          </p>

          <div className="bg-primary/10 border border-primary/20 rounded-lg p-4 sm:p-6 mt-6 sm:mt-8">
            <p className="text-sm text-muted-foreground mb-2">
              Agora que você descobriu seu personagem...
            </p>
            <p className="text-base sm:text-lg font-medium text-primary">
              Conheça a história de quem merece estar na Première! 💚
            </p>
            <Button
              size="sm"
              variant="link"
              className="text-secondary mt-2"
              onClick={() => document.getElementById('story')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Ler Minha História →
            </Button>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center pt-4 sm:pt-6">
            <Button
              size="lg"
              onClick={shareResult}
              className="bg-primary hover:bg-primary/90 w-full sm:w-auto"
            >
              <Share2 className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
              Compartilhar Resultado
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={resetQuiz}
              className="border-secondary text-secondary w-full sm:w-auto"
            >
              <RotateCcw className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
              Fazer Novamente
            </Button>
          </div>
        </div>
      </Card>
    );
  }

  return (
    <Card className="p-4 sm:p-6 md:p-8 lg:p-12 bg-card/50 backdrop-blur-sm border-primary/20">
      <div className="space-y-4 sm:space-y-6">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 mb-4 sm:mb-6">
          <span className="text-sm text-muted-foreground">
            Pergunta {currentQuestion + 1} de {questions.length}
          </span>
          <div className="flex gap-1 flex-wrap">
            {questions.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index <= currentQuestion ? "bg-primary" : "bg-muted"
                }`}
              />
            ))}
          </div>
        </div>

        <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 sm:mb-8 leading-tight">
          {questions[currentQuestion].question}
        </h3>

        <div className="grid gap-3 sm:gap-4">
          {questions[currentQuestion].options.map((option, index) => (
            <Button
              key={index}
              variant="outline"
              size="lg"
              onClick={() => handleAnswer(option.character)}
              className="text-left h-auto py-3 sm:py-4 px-4 sm:px-6 hover:bg-primary/10 hover:border-primary transition-all text-sm sm:text-base leading-relaxed"
            >
              {option.text}
            </Button>
          ))}
        </div>
      </div>
    </Card>
  );
}

