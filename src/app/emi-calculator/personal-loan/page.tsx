import EmiCalculatorComponent from "@/components/emicalculator/emicalculator";

export default function PersonalLoan() {
    return (
        <div className="container mx-auto p-6">
            <EmiCalculatorComponent loanType="personal"/>
        </div>
    );
}
