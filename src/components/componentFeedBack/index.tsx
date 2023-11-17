import { useState, useEffect, useMemo } from "react";
import anime from "animejs";
import More from "../../assets/More.svg";
import { StyledFeedback } from "./style";

export const Feedback = () => {
  const [feedbackIndex, setFeedbackIndex] = useState<number>(0);
  const [visibleFeedbacks, setVisibleFeedbacks] = useState<
    { nomeHospede: string; quantidadeEstrelas: number; numeroQuarto: string }[]
  >([]);

  const feedback = useMemo(
    () => [
      {
        nomeHospede: "João",
        quantidadeEstrelas: 4,
        numeroQuarto: "A101",
      },
      {
        nomeHospede: "Maria",
        quantidadeEstrelas: 5,
        numeroQuarto: "B205",
      },
      {
        nomeHospede: "Carlos",
        quantidadeEstrelas: 3,
        numeroQuarto: "C308",
      },
      {
        nomeHospede: "Ana",
        quantidadeEstrelas: 4,
        numeroQuarto: "A112",
      },
      {
        nomeHospede: "Pedro",
        quantidadeEstrelas: 5,
        numeroQuarto: "D415",
      },
      {
        nomeHospede: "Laura",
        quantidadeEstrelas: 2,
        numeroQuarto: "B223",
      },
      {
        nomeHospede: "Fernando",
        quantidadeEstrelas: 3,
        numeroQuarto: "C312",
      },
      {
        nomeHospede: "Beatriz",
        quantidadeEstrelas: 4,
        numeroQuarto: "D408",
      },
      {
        nomeHospede: "Miguel",
        quantidadeEstrelas: 5,
        numeroQuarto: "E524",
      },
      {
        nomeHospede: "Antonio",
        quantidadeEstrelas: 2,
        numeroQuarto: "E524",
      },
      {
        nomeHospede: "Xuxa",
        quantidadeEstrelas: 5,
        numeroQuarto: "E524",
      },
      {
        nomeHospede: "Pietro",
        quantidadeEstrelas: 1,
        numeroQuarto: "E524",
      },
    ],
    []
  );

  useEffect(() => {
    const intervalId = setInterval(() => {
      anime({
        targets: ".feedback-list li",
        opacity: [1, 0],
        translateY: [0, -8],
        duration: 500,
        easing: "easeInOutQuad",
        complete: () => {
          setFeedbackIndex((prevIndex) => (prevIndex + 2) % feedback.length);

          anime({
            targets: ".feedback-list li",
            opacity: [0, 1],
            translateY: [8, 0],
            duration: 500,
            easing: "easeInOutQuad",
          });
        },
      });
    }, 5000);

    setFeedbackIndex(0);

    return () => clearInterval(intervalId);
  }, [feedback]);

  useEffect(() => {
    const startIndex = feedbackIndex % feedback.length;
    const endIndex = (startIndex + 3) % feedback.length; // ajuste para pegar 3 elementos

    setVisibleFeedbacks(feedback.slice(startIndex, endIndex + 1));
  }, [feedbackIndex, feedback]);

  return (
    <StyledFeedback>
      <div className="title">
        <h3>Feedback</h3>
        <img src={More} alt="Mais detalhes" />
      </div>
      <ul className="feedback-list">
        {visibleFeedbacks.map((item, index) => (
          <li key={index}>
            <div className="guest">
              <p>{item.nomeHospede}</p>
              <span>{item.quantidadeEstrelas} estrelas</span>
            </div>
            <p>{item.numeroQuarto}</p>
          </li>
        ))}
      </ul>
    </StyledFeedback>
  );
};
