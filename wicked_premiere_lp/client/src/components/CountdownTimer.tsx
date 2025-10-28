import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const premiereDate = new Date("2025-11-04T19:00:00-03:00"); // 4 de novembro de 2025, 19h (horário de Brasília)

    const updateCountdown = () => {
      const now = new Date();
      const difference = premiereDate.getTime() - now.getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Card className="p-8 bg-gradient-to-br from-primary/10 to-secondary/10 border-primary/30">
      <div className="text-center space-y-4">
        <h3 className="text-2xl md:text-3xl font-bold text-primary">
          Contagem Regressiva para a Première
        </h3>
        <p className="text-muted-foreground">4 de Novembro de 2025 • São Paulo</p>
        
        <div className="grid grid-cols-4 gap-4 mt-8">
          {[
            { label: "Dias", value: timeLeft.days },
            { label: "Horas", value: timeLeft.hours },
            { label: "Minutos", value: timeLeft.minutes },
            { label: "Segundos", value: timeLeft.seconds },
          ].map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                {String(item.value).padStart(2, "0")}
              </div>
              <div className="text-sm text-muted-foreground">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
}

