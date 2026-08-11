import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { AlertTriangle, CheckCircle2, RotateCcw } from "lucide-react";
import { Progress } from "@/components/ui/progress";

type Question = {
  id: string;
  question: string;
  options: { label: string; risk: 0 | 1 | 2 }[];
  blindspot: string;
};

const questions: Question[] = [
  {
    id: "fra",
    question: "Does the building have a current Fire Risk Assessment?",
    options: [
      { label: "Yes, within the last 12 months", risk: 0 },
      { label: "Yes, but it is over 12 months old", risk: 1 },
      { label: "No / not sure", risk: 2 },
    ],
    blindspot: "Fire Risk Assessment out of date or missing — the foundation of every other control.",
  },
  {
    id: "safety-case",
    question: "Is a Building Safety Case in place for any higher-risk building?",
    options: [
      { label: "Yes, submitted and accepted", risk: 0 },
      { label: "In progress", risk: 1 },
      { label: "No / not applicable but unconfirmed", risk: 2 },
    ],
    blindspot: "No accepted safety case — a direct regulatory exposure for the accountable person.",
  },
  {
    id: "fraew",
    question: "Has an FRAEW been conducted on the external walls?",
    options: [
      { label: "Yes, to PAS 9980", risk: 0 },
      { label: "An older EWS1 only", risk: 1 },
      { label: "No", risk: 2 },
    ],
    blindspot: "External wall construction unappraised — the most common barrier to sales and funding.",
  },
  {
    id: "doors",
    question: "Are fire door inspections carried out at the required frequency?",
    options: [
      { label: "Yes, quarterly and annually as required", risk: 0 },
      { label: "Partially — communal doors only", risk: 1 },
      { label: "No formal programme", risk: 2 },
    ],
    blindspot: "Fire door inspection regime incomplete — a frequent enforcement finding.",
  },
  {
    id: "compartmentation",
    question: "Has compartmentation been surveyed, including concealed voids?",
    options: [
      { label: "Yes, intrusive survey completed", risk: 0 },
      { label: "Visual inspection only", risk: 1 },
      { label: "No", risk: 2 },
    ],
    blindspot: "Compartmentation unverified — undetected breaches undermine the stay-put strategy.",
  },
  {
    id: "rpeep",
    question: "Do residents who need assistance have a personal evacuation plan?",
    options: [
      { label: "Yes, RPEEPs in place and reviewed", risk: 0 },
      { label: "Identified but plans not yet written", risk: 1 },
      { label: "No process in place", risk: 2 },
    ],
    blindspot: "No person-centred evacuation planning for residents who cannot self-evacuate.",
  },
  {
    id: "engagement",
    question: "Is there a documented resident engagement strategy?",
    options: [
      { label: "Yes, documented and active", risk: 0 },
      { label: "Informal communication only", risk: 1 },
      { label: "No", risk: 2 },
    ],
    blindspot: "Resident engagement undocumented — a statutory requirement for higher-risk buildings.",
  },
];

export function BlindspotCalculator() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const done = step >= questions.length;
  const progress = Math.round((Math.min(step, questions.length) / questions.length) * 100);

  function answer(risk: number) {
    const current = questions[step]!;
    setAnswers((prev) => ({ ...prev, [current.id]: risk }));
    setStep((prev) => prev + 1);
  }

  function reset() {
    setAnswers({});
    setStep(0);
  }

  const blindspots = questions.filter((question) => (answers[question.id] ?? 0) > 0);
  const score = Math.max(
    0,
    100 - Math.round((Object.values(answers).reduce((a, b) => a + b, 0) / (questions.length * 2)) * 100),
  );

  return (
    <div className="mx-auto mt-12 max-w-2xl border border-border bg-card p-8">
      <div className="flex items-center justify-between">
        <span className="heading text-xs tracking-[0.2em] text-muted-foreground">
          {done ? "Results" : `Question ${step + 1} of ${questions.length}`}
        </span>
        <span className="heading text-xs tracking-[0.2em] text-primary">{progress}%</span>
      </div>
      <Progress value={progress} className="mt-3" />

      {done ? (
        <div className="mt-8">
          <p className="heading text-5xl text-primary">{score}%</p>
          <p className="heading mt-2 text-sm">Compliance Confidence Score</p>
          <div className="mt-8 space-y-4">
            {blindspots.length === 0 ? (
              <p className="flex gap-3 border border-border p-5 text-muted-foreground">
                <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" />
                No obvious blindspots from these answers. A formal review is still recommended annually.
              </p>
            ) : (
              blindspots.map((item) => (
                <p key={item.id} className="flex gap-3 border-l-2 border-primary bg-muted p-5 text-sm text-muted-foreground">
                  <AlertTriangle className="h-5 w-5 shrink-0 text-primary" />
                  {item.blindspot}
                </p>
              ))
            )}
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/contact" className="heading bg-primary px-7 py-3.5 text-sm text-primary-foreground hover:bg-primary/85">
              Book a Consultation
            </Link>
            <button type="button" onClick={reset} className="heading inline-flex items-center gap-2 border border-input px-7 py-3.5 text-sm hover:border-primary">
              <RotateCcw className="h-4 w-4" /> Start Again
            </button>
          </div>
        </div>
      ) : (
        <div className="mt-8">
          <h3 className="heading text-lg">{questions[step]!.question}</h3>
          <div className="mt-6 space-y-3">
            {questions[step]!.options.map((option) => (
              <button
                key={option.label}
                type="button"
                onClick={() => answer(option.risk)}
                className="w-full border border-input p-4 text-left text-sm transition-colors hover:border-primary hover:bg-muted"
              >
                {option.label}
              </button>
            ))}
          </div>
          {step > 0 ? (
            <button type="button" onClick={() => setStep((prev) => prev - 1)} className="heading mt-6 text-xs text-muted-foreground hover:text-primary">
              Back
            </button>
          ) : null}
        </div>
      )}
    </div>
  );
}