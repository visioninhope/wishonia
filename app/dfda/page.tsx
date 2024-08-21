import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { AlertCircle, CheckCircle, HelpCircle, Skull, Cigarette, Beer, Pill, Droplet, Wind, Users } from 'lucide-react';
import { ExtendedMetaAnalysisReport, Article} from "@/lib/agents/fdai/fdaiMetaAnalyzer";
import ArticleCard from "@/lib/agents/fdai/ArticleCard";

// Example report data
const exampleReport: ExtendedMetaAnalysisReport = {
  drugName: "Lisinopril",
  conditionName: "Hypertension",
  overallSafetyRating: "Moderate",
  shortSafetySummary: "Lisinopril is generally well-tolerated but requires monitoring for specific side effects and interactions.",
  keyFindings: [
    "Effective in reducing blood pressure in most patients",
    "May cause dry cough in some patients",
    "Potential for severe allergic reactions in rare cases"
  ],
  riskFactors: [
    "History of angioedema",
    "Kidney disease",
    "Electrolyte imbalances"
  ],
  precautions: [
    "Regular monitoring of kidney function and potassium levels",
    "Avoid use during pregnancy",
    "Use with caution in patients with severe heart failure"
  ],
  contraindications: [
    "History of angioedema related to ACE inhibitor use",
    "Hereditary or idiopathic angioedema",
    "Concomitant use with aliskiren in patients with diabetes"
  ],
  longTermSafetyConsiderations: "Long-term use of Lisinopril is generally considered safe, but ongoing monitoring of kidney function and potassium levels is recommended.",
  pregnancySafety: "Contraindicated during pregnancy due to risk of fetal harm, especially in the second and third trimesters.",
  childrenSafety: "Safety and effectiveness in pediatric patients under 6 years of age have not been established.",
  drugInteractions: [
    {
      drug: "NSAIDs",
      interaction: "May reduce the antihypertensive effect of Lisinopril",
      severity: "Moderate"
    },
    {
      drug: "Potassium supplements",
      interaction: "May increase the risk of hyperkalemia",
      severity: "Moderate"
    },
    {
      drug: "Lithium",
      interaction: "May increase serum lithium levels and lithium toxicity",
      severity: "High"
    }
  ],
  sideEffects: [
    {
      effect: "Dry cough",
      frequency: "Common (up to 20% of patients)",
      severity: "Mild to moderate"
    },
    {
      effect: "Dizziness",
      frequency: "Common (up to 12% of patients)",
      severity: "Mild"
    },
    {
      effect: "Hyperkalemia",
      frequency: "Uncommon (1-2% of patients)",
      severity: "Potentially severe"
    },
    {
      effect: "Angioedema",
      frequency: "Rare (0.1-0.2% of patients)",
      severity: "Severe"
    }
  ],
  relativeSafetyScore: 7.5,
  effectivenessComparison: [
    {
      intervention: "Amlodipine (calcium channel blocker)",
      relativeEffectiveness: "Similar effectiveness in blood pressure reduction",
      dalysAvoided: 0.15,
      qalysIncreased: 0.2,
      numberNeededToHarm: 50,
      numberNeededToTreat: 20
    },
    {
      intervention: "Lifestyle modifications alone",
      relativeEffectiveness: "More effective than lifestyle modifications alone",
      dalysAvoided: 0.3,
      qalysIncreased: 0.4,
      numberNeededToHarm: 100,
      numberNeededToTreat: 15
    }
  ],
  dalysAvoided: 0.25,
  qalysIncreased: 0.35,
  numberNeededToHarm: 75,
  numberOfPatients: 50000000,
  numberNeededToTreat: 18,
  referenceSources: [
    {
      id: "1",
      title: "Article 1",
      author: "Author 1",
      publishedDate: "2024-01-01",
      text: "This is the text of article 1",
      url: "https://example.com/article1",
      score: 8.5
    }
  ]
};

const SafetyRatingBadge = ({ rating }: { rating: 'Safe' | 'Moderate' | 'Low' | 'High' }) => {
  const color = rating === 'Safe' ? 'bg-green-500' :
      rating === 'Moderate' ? 'bg-yellow-500' : 'bg-red-500';
  const icon = rating === 'Safe' ? <CheckCircle className="w-4 h-4 mr-1" /> :
      rating === 'Moderate' ? <HelpCircle className="w-4 h-4 mr-1" /> :
          <AlertCircle className="w-4 h-4 mr-1" />;

  return (
      <Badge className={`${color} text-white flex items-center`}>
        {icon} {rating}
      </Badge>
  );
};

const ListSection = ({ title, items }: { title: string; items: string[] }) => (
  <div className="mb-4">
    <h3 className="text-lg font-semibold mb-2">{title}</h3>
    <ul className="list-disc pl-5">
      {items.map((item: string, index: number) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  </div>
);

const SafetyScoreBar = ({ score }: { score: number }) => {
  const getColor = (score: number) => {
    if (score < 2) return 'bg-red-600';
    if (score < 4) return 'bg-orange-500';
    if (score < 6) return 'bg-yellow-400';
    if (score < 8) return 'bg-lime-500';
    return 'bg-green-600';
  };

  const referencePoints = [
    { score: 0, label: 'Extremely unsafe (Cyanide)', icon: <Skull className="w-4 h-4" /> },
    { score: 2, label: 'Very unsafe (Cigarette)', icon: <Cigarette className="w-4 h-4" /> },
    { score: 4, label: 'Moderately unsafe (Beer)', icon: <Beer className="w-4 h-4" /> },
    { score: 6, label: 'Moderately safe (Aspirin)', icon: <Pill className="w-4 h-4" /> },
    { score: 8, label: 'Very safe (Water)', icon: <Droplet className="w-4 h-4" /> },
    { score: 10, label: 'Extremely safe (Air)', icon: <Wind className="w-4 h-4" /> },
  ];

  return (
    <div className="mb-24">
      <div className="relative">
        <div className="h-8 w-full border border-gray-300 rounded-full overflow-hidden">
          <div 
            className={`h-full ${getColor(score)} flex items-center justify-end pr-2`} 
            style={{ width: `${score * 10}%` }}
          >
            <span className="text-white font-semibold text-sm">
              Safety Score: {score.toFixed(1)}/10
            </span>
          </div>
        </div>
        <div className="absolute top-full left-0 right-0 flex justify-between mt-2">
          {referencePoints.map((point, index) => (
            <div key={index} className="flex flex-col items-center" style={{ left: `${point.score * 10}%` }}>
              {point.icon}
              <span className="text-xs mt-1 sm:text-xs text-[0.6rem] text-center">{point.label}</span>
            </div>
          ))}
        </div>
        <div 
          className="absolute top-0 w-0.5 h-10 bg-black"
          style={{ left: `${score * 10}%`, transform: 'translateX(-50%)' }}
        />
      </div>
    </div>
  );
};

const MetaAnalysisReport = ({ report }: { report: ExtendedMetaAnalysisReport }) => {
  return (
      <div className="space-y-4">
        <Card>
          <CardHeader>
            <CardTitle>{report.drugName} for {report.conditionName}</CardTitle>
            <div className="flex items-center space-x-2">
              <SafetyRatingBadge rating={report.overallSafetyRating} />
            </div>
          </CardHeader>
          <CardContent>
            <p className="mb-4">Safety Summary: {report.shortSafetySummary}</p>
            <SafetyScoreBar score={report.relativeSafetyScore} />
            <ListSection title="Key Findings" items={report.keyFindings} />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Safety Considerations</CardTitle>
          </CardHeader>
          <CardContent>
            <ListSection title="Risk Factors" items={report.riskFactors} />
            <ListSection title="Precautions" items={report.precautions} />
            <ListSection title="Contraindications" items={report.contraindications} />
            <div className="mb-4">
              <h3 className="text-lg font-semibold mb-2">Long-term Safety</h3>
              <p>{report.longTermSafetyConsiderations}</p>
            </div>
            <div className="mb-4">
              <h3 className="text-lg font-semibold mb-2">Special Populations</h3>
              <p><strong>Pregnancy:</strong> {report.pregnancySafety}</p>
              <p><strong>Children:</strong> {report.childrenSafety}</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Drug Interactions</CardTitle>
          </CardHeader>
          <CardContent>
            {report.drugInteractions.map((interaction, index: number) => (
                <div key={index} className="mb-2">
                  <strong>{interaction.drug}:</strong> {interaction.interaction}
                  <SafetyRatingBadge rating={interaction.severity} />
                </div>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Side Effects</CardTitle>
          </CardHeader>
          <CardContent>
            {report.sideEffects.map((effect, index: number) => (
                <div key={index} className="mb-2">
                  <strong>{effect.effect}:</strong> {effect.frequency}
                  {effect.severity && ` (Severity: ${effect.severity})`}
                </div>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Effectiveness Comparison</CardTitle>
          </CardHeader>
          <CardContent>
            {report.effectivenessComparison.map((comparison, index: number) => (
                <div key={index} className="mb-4">
                  <h3 className="text-lg font-semibold">{comparison.intervention}</h3>
                  <p><strong>Relative Effectiveness:</strong> {comparison.relativeEffectiveness}</p>
                  {comparison.dalysAvoided && <p><strong>DALYs Avoided:</strong> {comparison.dalysAvoided.toFixed(2)}</p>}
                  {comparison.qalysIncreased && <p><strong>QALYs Increased:</strong> {comparison.qalysIncreased.toFixed(2)}</p>}
                  {comparison.numberNeededToHarm && <p><strong>Number Needed to Harm:</strong> {comparison.numberNeededToHarm}</p>}
                  {comparison.numberNeededToTreat && <p><strong>Number Needed to Treat:</strong> {comparison.numberNeededToTreat}</p>}
                </div>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>By Making This Treatment Available</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {report.dalysAvoided && (
              <div className="flex items-center">
                <AlertCircle className="mr-2 text-blue-500" />
                <span className="font-semibold">DALYs Avoided:</span>
                <Badge variant="outline" className="ml-2">{report.dalysAvoided.toFixed(2)}</Badge>
                <div className="ml-2 text-sm text-gray-600">
                  Disability-Adjusted Life Years saved per patient if treated
                </div>
              </div>
            )}
            {report.qalysIncreased && (
              <div className="flex items-center">
                <CheckCircle className="mr-2 text-green-500" />
                <span className="font-semibold">QALYs Increased:</span>
                <Badge variant="outline" className="ml-2">{report.qalysIncreased.toFixed(2)}</Badge>
                <span className="ml-2 text-sm text-gray-600">
                  Quality-Adjusted Life Years gained per patient if treated
                </span>
              </div>
            )}
            {report.numberNeededToHarm && (
              <div className="flex items-center">
                <HelpCircle className="mr-2 text-yellow-500" />
                <span className="font-semibold">Number Needed to Harm:</span>
                <Badge variant="outline" className="ml-1">{report.numberNeededToHarm}</Badge>
                <span className="ml-2 text-sm text-gray-600">
                  patients treated before one is harmed
                </span>
              </div>
            )}
            {report.numberNeededToTreat && (
              <div className="flex items-center">
                <Pill className="mr-2 text-purple-500" />
                <span className="font-semibold">Number Needed to Treat:</span>
                <Badge variant="outline" className="ml-2">{report.numberNeededToTreat}</Badge>
                <span className="ml-2 text-sm text-gray-600">(Patients treated for one to benefit)</span>
              </div>
            )}
            {report.numberOfPatients && (
              <div className="flex items-center">
                <Users className="mr-2 text-indigo-500" />
                <span className="font-semibold">Patients Benefiting:</span>
                <Badge variant="outline" className="ml-2">{report.numberOfPatients.toLocaleString()}</Badge>
                <span className="ml-2 text-sm text-gray-600">(Estimated global impact)</span>
              </div>
            )}
          </CardContent>
        </Card>
        <div className="flex flex-col items-center">
          <h3 className="text-lg font-semibold mb-2">References</h3>
          {report.referenceSources.map((source: Article, index: number) => (
            <ArticleCard key={index} article={source} />
          ))}
        </div>
      </div>
  );
};

const App = () => {
  return (
      <div className="container mx-auto p-4">
        <MetaAnalysisReport report={exampleReport} />
      </div>
  );
};

export default App;