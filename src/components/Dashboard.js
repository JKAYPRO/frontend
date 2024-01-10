import React from 'react';
import { Typography, Container, Grid, Paper } from '@mui/material';
import DocumentRepository from './DocumentRepository';

const financialData = {
    totalAnnualRevenue: '$3,800,000',
    totalAnnualExpenses: '$2,250,000',
    netIncomeForYear: '$1,550,000',
    membershipFees: {
        totalMembers: 500,
        annualFeePerMember: '$3,000',
        totalRevenueFromMembershipFees: '$1,500,000'
    },
    greenFees: {
        averageDailyNonMemberPlayers: 50,
        feePerRound: '$100',
        daysOpenPerYear: 300,
        totalRevenueFromGreenFees: '$1,500,000'
    },
    proShopSales: {
        averageMonthlySales: '$20,000',
        totalAnnualSales: '$240,000'
    },
    foodAndBeverageSales: {
        averageMonthlySales: '$30,000',
        totalAnnualSales: '$360,000'
    },
    eventHosting: {
        totalEventsPerYear: 20,
        averageRevenuePerEvent: '$10,000',
        totalRevenueFromEvents: '$200,000'
    },
    expenses: {
        payrollAndBenefits: '$1,200,000',
        maintenanceAndUpkeep: {
            courseMaintenance: '$400,000',
            clubhouseMaintenance: '$100,000',
            total: '$500,000'
        },
        utilities: '$150,000',
        taxesAndInsurance: {
            propertyTaxes: '$80,000',
            insurance: '$70,000',
            total: '$150,000'
        },
        proShopInventoryCostOfGoodsSold: '$120,000',
        marketingAndAdvertising: '$60,000',
        miscellaneous: '$70,000'
    }
};


const Dashboard = () => {
  const renderFinancialSection = (sectionTitle, data) => {
    return (
      <Grid item xs={12} md={6}>
        <Paper style={{ padding: '20px', marginBottom: '20px' }}>
          <Typography variant="h6" gutterBottom>{sectionTitle}</Typography>
          {Object.entries(data).map(([key, value]) => {
            if (typeof value === 'object' && value !== null) {
              return (
                <div key={key}>
                  <Typography variant="subtitle1">{key.replace(/([A-Z])/g, ' $1').trim()}</Typography>
                  {Object.entries(value).map(([subKey, subValue]) => (
                    <Typography key={subKey}>{`${subKey.replace(/([A-Z])/g, ' $1').trim()}: ${subValue}`}</Typography>
                  ))}
                </div>
              );
            } else {
              return <Typography key={key}>{`${key.replace(/([A-Z])/g, ' $1').trim()}: ${value}`}</Typography>;
            }
          })}
        </Paper>
      </Grid>
    );
  };

  return (
    <Container>
      <Typography variant="h4" style={{ marginTop: '20px', marginBottom: '20px' }}>
        Dashboard
      </Typography>
      <Grid container spacing={3}>
        {renderFinancialSection("Membership Fees", financialData.membershipFees)}
        {renderFinancialSection("Green Fees", financialData.greenFees)}
        {renderFinancialSection("Pro Shop Sales", financialData.proShopSales)}
        {renderFinancialSection("Food and Beverage Sales", financialData.foodAndBeverageSales)}
        {renderFinancialSection("Event Hosting", financialData.eventHosting)}
        {renderFinancialSection("Expenses", financialData.expenses)}
        <Grid item xs={12}>
          <DocumentRepository />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Dashboard;

