% Import data

data = importfile_coord('Coord6.trc')


figure
plot(data.time,data.Z1)
hold
plot(data.time,data.Z2)
ylabel('Rod tip position (mm)')
xlabel('Time (s)')
legend('Left hand','Right hand')
set(gcf,'Position',[-627,1284.20000000000,1060,367.200000000000])

[crp, crpH] = RelPhase_Cont(data.Z1,data.Z2,125);

figure
subplot(211)
plot(data.time,data.Z1)
hold
plot(data.time,data.Z2)
ylabel('Rod tip position (mm)')
xlabel('Time (s)')
legend('Left hand','Right hand')

subplot(212)
plot(data.time,crpH)
ylabel('Relative phase')
xlabel('Time (s)')
ylim([-270 270])

set(gcf,'Position',[-627,1284.20000000000,1060,367.200000000000])





[inst_phase, r, pval] = HilbertPhase(data.Z1,data.Z2,data.time,1)

phase = norm_around_0(inst_phase);
figure
plot(phase)

phase(phase<-50)=[];
phase(phase>120)=[];

figure
plot(phase)

mean(phase)
std(phase)